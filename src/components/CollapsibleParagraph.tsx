import React, { useState } from 'react';
import './Paragraph.css';

interface ParagraphProps {
  header: string;
  content: string;
}

const CollapsibleParagraph: React.FC<ParagraphProps> = ({ header, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="collapsible-paragraph">
      <div className="collapsible-header" onClick={toggleExpanded}>
        <span className="paragraph-header">{header}</span>
        <button className="expand-button">{expanded ? '−' : '+'}</button>
      </div>
      {expanded && <p className="collapsible-content">{content}</p>}
    </div>
  );
};

export default CollapsibleParagraph;
