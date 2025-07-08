import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { BlogSchema, UserSchema } from "@/lib/Schema";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );

    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const { user, blog } = await req.json();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id)
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );

    const u = UserSchema.parse(user);
    const b = BlogSchema.parse(blog);

    if (
      u.username !== process.env.ADMIN_USERNAME ||
      u.password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.blog.update({
      where: { id },
      data: {
        title: b.title,
        subtitle: b.subtitle,
        content: b.content,
      },
    });

    return NextResponse.json(
      { message: "Blog created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating Blog:", error);
    return NextResponse.json(
      { error: "Failed to update Blog" },
      { status: 500 }
    );
  }
};
