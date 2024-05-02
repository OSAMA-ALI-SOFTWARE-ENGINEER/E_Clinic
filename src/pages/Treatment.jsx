import Card from "../ui/Card";

function treatment() {
  return (
    <div className=" grid grid-cols-3 gap-4 mt-8">
      {[...new Array(5)]?.map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

export default treatment;
