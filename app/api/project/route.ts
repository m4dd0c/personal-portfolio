import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { MediaSchema, ProjectSchema, UserSchema } from "@/lib/Schema";

export const GET = async () => {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.log("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects." },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { user, project, media } = await req.json();

    const u = UserSchema.parse(user);
    const p = ProjectSchema.parse(project);
    const m = MediaSchema.parse(media);

    if (
      u.username !== process.env.ADMIN_USERNAME ||
      u.password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.$transaction(async (tx) => {
      const project = await prisma.project.create({
        data: {
          title: p.title,
          subtitle: p.subtitle,
          description: p.description,
          url: p.url,
          repo_url: p.repo_url,
        },
      });

      await tx.media.create({
        data: {
          type: m.type,
          public_id: m.public_id,
          secure_url: m.secure_url,
          projectId: project.id,
        },
      });
    });

    return NextResponse.json(
      { message: "Project created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project." },
      { status: 500 }
    );
  }
};
