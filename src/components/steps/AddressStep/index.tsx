import { FormData } from "@/App";
import { Button } from "@/components/Button";
import { useFormContext } from "react-hook-form";
import { Input } from "../../Input";
import { Label } from "../../Label";
import { StepHeader } from "../../StepHeader";
import { StepperFooter, StepperPreviousButton } from "../../Stepper";

export function AddressStep() {
  const form = useFormContext<FormData>();

  return (
    <div>
      <StepHeader title="Endereço" description="De onde você é?" />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input
            id="state"
            type="text"
            {...form.register("addressStep.state")}
          />
          <small className="text-destructive">
            {form.formState.errors.addressStep?.state?.message}
          </small>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" type="text" {...form.register("addressStep.city")} />
          <small className="text-destructive">
            {form.formState.errors.addressStep?.city?.message}
          </small>
        </div>

        <div className="space-y-2">
          <Label htmlFor="street">Endereço</Label>
          <Input
            id="street"
            type="text"
            {...form.register("addressStep.street")}
          />
          <small className="text-destructive">
            {form.formState.errors.addressStep?.street?.message}
          </small>
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />

        <Button disabled={form.formState.isSubmitting} type="submit" size="sm">
          Finalizar
        </Button>
      </StepperFooter>
    </div>
  );
}
