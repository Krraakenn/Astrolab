import "../../styles/components/Navbar/databaseitem.css"

interface DatbaseItemProps {
  title: string;
  description: string;
}

export default function DatabaseItem(props: DatbaseItemProps) {
  return (
    <div className="databaseitem-box">
      <p className="databaseitem-title">{props.title}</p>
      <p className="databaseitem-description">{props.description}</p>
    </div>
  );
}
