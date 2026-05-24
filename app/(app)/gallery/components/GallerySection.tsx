"use client";

import { useMemo, useState } from "react";

import GalleryCategories from "./GalleryCategories";
import MasonryGallery from "./MasonryGallery";

import { galleryData } from "../data/gallery";

export default function GallerySection() {
  const [active, setActive] = useState("All");

  const filteredImages = useMemo(() => {
    if (active === "All") return galleryData;

    return galleryData.filter(
      (item) => item.category === active
    );
  }, [active]);

  return (
    <>
      <GalleryCategories
        active={active}
        setActive={setActive}
      />

      <MasonryGallery images={filteredImages} />
    </>
  );
}