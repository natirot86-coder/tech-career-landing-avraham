'use client';

import { useEffect, useState } from 'react';

/** Types, holds, deletes and cycles through `words`. */
export default function Typewriter({ words, className = '' }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let delay = deleting ? 40 : 90;
    if (!deleting && text === word) delay = 1600;
    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setI((n) => n + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, i, words]);

  return (
    <span className={`hd-caret ${className}`} aria-label={words.join(', ')}>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
