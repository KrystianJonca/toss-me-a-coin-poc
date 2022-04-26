import React from 'react';

interface SectionWrapperProps {
  id?: String;
  readonly children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section
      className="max-w-7xl mx-auto flex items-center justify-center"
      {...(typeof id !== undefined && `id=${id}`)}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;