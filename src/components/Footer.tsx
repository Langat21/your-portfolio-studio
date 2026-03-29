const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="container-max flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Langat.K
        </p>
        <p className="text-xs text-muted-foreground/50">
          Built with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
