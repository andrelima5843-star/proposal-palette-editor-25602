import { useState } from "react";
import { Edit2, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
  multiline?: boolean;
  className?: string;
  placeholder?: string;
}

export const EditableText = ({
  value,
  onChange,
  isEditing,
  multiline = false,
  className = "",
  placeholder,
}: EditableTextProps) => {
  if (!isEditing) {
    return <span className={className}>{value}</span>;
  }

  if (multiline) {
    return (
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        placeholder={placeholder}
        rows={3}
      />
    );
  }

  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder={placeholder}
    />
  );
};
