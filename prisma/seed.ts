import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const projects = [
  {
    title: "Zero Playlist",
    subtitle:
      "A music playlist app that allows users to create, share, and discover playlists.",
    description:
      "Zero Playlist is a music playlist app that allows users to create, share, and discover playlists. It features a user-friendly interface, social sharing capabilities, and personalized recommendations based on user preferences. It is designed to enhance the music listening experience by enabling users to curate their own playlists and explore playlists created by others.",
    url: "https://zeroplaylist.com",

    type: "IMAGE",
    public_id: "zeroplaylist-image",
    secure_url: "https://i.imgur.com/0k1Z2bH.png",
  },
  {
    title: "Zero Chat",
    subtitle:
      "A real-time chat application that allows users to communicate with each other instantly.",
    description:
      "Zero Chat is a real-time chat application that allows users to communicate with each other instantly. It supports one-on-one and group chats, file sharing, and message history. The app is designed to provide a seamless communication experience with low latency and high reliability.",
    url: "https://zerochat.com",
    type: "IMAGE",
    public_id: "zerochat-image",
    secure_url: "https://i.imgur.com/0k1Z2bH.png",
  },
  {
    title: "Zero Blog",
    subtitle:
      "A blogging platform that allows users to create, share, and discover blog posts.",
    description:
      "Zero Blog is a blogging platform that allows users to create, share, and discover blog posts. It features a rich text editor, social sharing capabilities, and personalized recommendations based on user interests. The platform is designed to foster a community of writers and readers, enabling them to connect through shared content.",
    url: "https://zeroblog.com",
    type: "IMAGE",
    public_id: "zeroblog-image",
    secure_url: "https://i.imgur.com/0k1Z2bH.png",
  },
];

export async function main() {
  for (const p of projects) {
    prisma.$transaction(async (tx) => {
      const project = await prisma.project.create({
        data: {
          title: p.title,
          subtitle: p.subtitle,
          description: p.description,
          url: p.url,
          media: undefined,
        },
      });

      await tx.media.create({
        data: {
          type: <"IMAGE" | "VIDEO">p.type,
          public_id: p.public_id,
          secure_url: p.secure_url,
          projectId: project.id,
        },
      });
    });
  }
}

main();
