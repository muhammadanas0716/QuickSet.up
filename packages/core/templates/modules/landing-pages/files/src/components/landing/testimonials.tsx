import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: {
    name: string;
    role: string;
    image?: string;
  };
}

interface TestimonialsProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export function Testimonials({ title, description, testimonials }: TestimonialsProps) {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                {testimonial.author.image ? (
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {testimonial.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-medium">{testimonial.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
