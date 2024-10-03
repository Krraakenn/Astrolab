interface DatbaseItemProps {
  title: string;
}

export default function DatabaseItem(props: DatbaseItemProps) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
}
