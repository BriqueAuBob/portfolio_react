import type { ReactNode } from "react";

type HexColor = string;

export type Technology = {
  name: string;
  logo: string;
  href?: string;
};

export type Section = {
  title: string;
  description?: string;
  content?: ReactNode;
};

export type Image =
  | {
      src: string;
      alt: string;
    }
  | string;

export type Project = {
  name: string;
  description: string;
  href?: string;
  thumbnail: string;
  slug: string;
  color: HexColor;
  sourceAvailableAt?: string;
  technologies?: Technology[];
  sections?: Section[];
  images?: Image[];
  isDesign?: boolean;
};

export default Project;
