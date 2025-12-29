"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { ImageDialog } from "./ImageDialog";

export function CaseImage({ src, alt, caption }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const step = {
    title: alt,
    description: caption || "",
    image: src,
  };

  return (
    <figure className="my-8">
      <button
        onClick={() => setDialogOpen(true)}
        className="group relative block w-full overflow-hidden rounded-lg border border-border transition-all hover:border-primary/50 hover:shadow-lg"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto transition-transform group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/30">
          <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-medium opacity-0 shadow-lg transition-all group-hover:opacity-100">
            <ZoomIn className="h-4 w-4" />
            Ver más grande
          </span>
        </div>
      </button>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}

      <ImageDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        currentIndex={0}
        steps={[step]}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </figure>
  );
}
