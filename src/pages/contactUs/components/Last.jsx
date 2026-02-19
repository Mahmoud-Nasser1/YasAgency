const Last = () => {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="max-w-6xl mx-auto px-6  md:px-12 lg:px-24 xl:px-32 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className=" text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium ">
            Ready to Start?
          </p>
          <h2 className="text-4xl  font-light tracking-tight leading-[1.1] text-foreground">
            Let's Create Impact Together
          </h2>
        </div>
        <a
          href="mailto:info@yasadvertising.com"
          className="inline-block border border-foreground/30 px-12 py-4 text-xs uppercase tracking-[0.25em] text-foreground 
  hover:bg-foreground/10 transition-all duration-500 
  whitespace-nowrap"
        >
          Send Us an Email
        </a>
      </div>
    </section>
  );
};

export default Last;
