const Link = (props) => {
  const openInNewTab = props.openInNewTab ? "_blank" : "_self";
  return (
    <li>
      <a className="header-menu-item" href={props.href} target={openInNewTab}>
        {props.linkName}
      </a>
    </li>
  );
};

export default Link;
