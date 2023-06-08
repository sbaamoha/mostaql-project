interface AvatarProps {
  name: string;
  img: string;
}

export default function Avatar({ name, img }: AvatarProps) {
  return (
    <div className="flex items-center gap-3">
      <img className="w-6" src={img} alt={name} />
      <h2>{name} </h2>
    </div>
  );
}
