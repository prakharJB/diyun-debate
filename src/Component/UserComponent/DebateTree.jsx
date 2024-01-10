const DebateTree = ({ debates }) => {
  console.log(debates);

  const renderDebate = (debate, level = 0) => {
    console.log(`Rendering debate: ${debate.title} at level ${level}`);

    return (
      <div key={debate.id} style={{ marginLeft: `${level * 20}px` }}>
        <p>{debate.title}</p>
        {debate.cons &&
          debate.cons.length > 0 &&
          debate.cons.map((childDebate) =>
            renderDebate(childDebate, level + 1)
          )}
        {debate.pros &&
          debate.pros.length > 0 &&
          debate.pros.map((childDebate) =>
            renderDebate(childDebate, level + 1)
          )}
      </div>
    );
  };

  return (
    <div>
      {Array.isArray(debates) && debates.map((debate) => renderDebate(debate))}
    </div>
  );
};

export default DebateTree;
