import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { MediaSchema, ProjectSchema, UserSchema } from "@/lib/Schema";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        media: true,
      },
    });

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const { user, project, media } = await req.json();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id)
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );

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
      const project = await tx.project.update({
        where: { id },
        data: {
          title: p.title,
          subtitle: p.subtitle,
          description: p.description,
          url: p.url,
          repo_url: p.repo_url,
        },
      });

      await tx.media.update({
        where: {
          projectId: id,
        },
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
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
};
