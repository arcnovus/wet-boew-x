export interface BadgeProps {
  value?: number;
  description?: string;
}

export function Badge({ value, description }: BadgeProps) {
  let hint = description ?? value?.toString();
  let strValue = value?.toString();

  if (value == null || value < 1) {
    return null;
  }

  return (
    <span>
      <span className="badge">{strValue}</span>
      <span className="wb-inv">{`${strValue} ${hint}`}</span>
    </span>
  );
}
