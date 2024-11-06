import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function LevelSliderComponent({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[1]}
      max={13}
      step={1}
      className={cn("w-full", className)}
      {...props}
    />
  )
}
