export interface Skip {
    id: string;
    name: string;
    description: string;
    price_before_vat: number;
    vat: number;
    imageUrl?: string;
    size: number;
    hire_period_days: number;
    transport_cost: number | null;
    per_tonne_cost: number | null;
    postcode: string;
    area: string;
    forbidden: boolean;
    created_at: string;
    updated_at: string;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
  }
  