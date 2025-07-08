import { title } from "process";
import z from "zod";

const UserSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .max(50, "Username must contain at most 50 characters."),
  password: z
    .string()
    .min(1, "Password is required")
    .max(50, "Password must contain at most 50 characters."),
});

const MediaSchema = z.object({
  type: z.enum(["IMAGE", "VIDEO"]),
  public_id: z
    .string()
    .min(1, "Public ID is required")
    .max(100, "Public ID must contain at most 100 characters."),
  secure_url: z.string().url("Invalid URL"),
});

const ProjectSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(150, "Title must contain at most 150 characters."),

  subtitle: z
    .string()
    .max(200, "Subtitle must contain at most 300 characters.")
    .optional(),

  description: z
    .string()
    .max(10000, "Description must contain at most 10000 characters.")
    .optional(),

  url: z.string().url("Invalid URL").optional(),
  repo_url: z.string().url("Invalid URL").optional(),
  type: z.enum(["IMAGE", "VIDEO"]),
});

const BlogSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(150, "Title must contain at most 150 characters."),
  subtitle: z
    .string()
    .max(200, "Subtitle must contain at most 300 characters.")
    .optional(),
  content: z
    .string()
    .min(1, "Content is required")
    .max(10000, "Content must contain at most 10000 characters."),
});

export { UserSchema, MediaSchema, ProjectSchema, BlogSchema };
