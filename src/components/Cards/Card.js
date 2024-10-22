function Card({ project }) {
  const { title, description, image, link, technologies } = project;

  return (
    <div className="card bg-white p-4 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Technologies :</h3>
        <ul className="list-disc list-inside">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-500"
      >
        Voir le projet
      </a>
    </div>
  );
}

export default Card;
