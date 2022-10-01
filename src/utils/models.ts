import React from "react";

export interface TypographyProps {
  color?: string;
  textAlign?: string;
  children?: React.ReactNode;
}

export interface PriceModel {
  cost: number;
  currency: string;
}

export interface SalesItem {
  image: string;
  title: string;
  cost: PriceModel;
  id: string;
  sale?: boolean;
  campaign?: boolean;
  liked?: boolean;
}
