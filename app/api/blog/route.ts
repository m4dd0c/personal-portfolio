import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { MediaSchema, BlogSchema, UserSchema } from "@/lib/Schema";

export const GET = async () => {
  try {
    const blogs = await prisma.blog.findMany();

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.log("Error fetching Blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch Blogs." },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { user, blog } = await req.json();

    const u = UserSchema.parse(user);
    const b = BlogSchema.parse(blog);

    if (
      u.username !== process.env.ADMIN_USERNAME ||
      u.password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.blog.create({
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
    console.error("Error creating Blog:", error);
    return NextResponse.json(
      { error: "Failed to create Blog." },
      { status: 500 }
    );
  }
};
