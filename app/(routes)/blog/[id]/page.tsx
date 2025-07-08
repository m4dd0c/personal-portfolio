const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return <div>{id} is my id</div>;
};

export default Page;
