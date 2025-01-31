import { FormData } from "@/App";
import { useStepper } from "@/components/Stepper/useStepper";
import { useFormContext } from "react-hook-form";
import { Input } from "../../Input";
import { Label } from "../../Label";
import { StepHeader } from "../../StepHeader";
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from "../../Stepper/index";

export function PersonalStep() {
  const { nextStep } = useStepper();
  const form = useFormContext<FormData>();

  async function hanldeNextStep() {
    const isValid = await form.trigger("personalStep", {
      shouldFocus: true,
    });

    if (isValid) {
      nextStep();
    }
  }

  return (
    <div>
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Primeiro nome</Label>
          <Input
            id="firstName"
            type="text"
            {...form.register("personalStep.firstName")}
          />
          <small className="text-destructive">
            {form.formState.errors.personalStep?.firstName?.message}
          </small>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input
            id="lastName"
            type="text"
            {...form.register("personalStep.lastName")}
          />
          <small className="text-destructive">
            {form.formState.errors.personalStep?.lastName?.message}
          </small>
        </div>

        <div className="space-y-2">
          <Label htmlFor="document">Cpf</Label>
          <Input
            id="document"
            type="text"
            {...form.register("personalStep.document")}
          />
          <small className="text-destructive">
            {form.formState.errors.personalStep?.document?.message}
          </small>
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />

        <StepperNextButton onClick={hanldeNextStep} />
      </StepperFooter>
    </div>
  );
}
