export const Link = ({ href, children, className, id, ...props }) => {
  return (
    <a id={id} href={href} className={className} {...props}>
      {children}
    </a>
  );
};
