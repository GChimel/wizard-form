import { FormData } from "@/App";
import { useStepper } from "@/components/Stepper/useStepper";
import { useFormContext } from "react-hook-form";
import { Input } from "../../Input";
import { Label } from "../../Label";
import { StepHeader } from "../../StepHeader";
import { StepperFooter, StepperNextButton } from "../../Stepper";

export function AccountStep() {
  const { nextStep } = useStepper();
  const form = useFormContext<FormData>();

  async function handleNextStep() {
    const isValid = await form.trigger("accountStep", {
      shouldFocus: true,
    });

    if (isValid) {
      nextStep();
    }
  }

  return (
    <div>
      <StepHeader
        title="Conta"
        description="Seus dados de acesso à plataforma"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-md">
            E-mail
          </Label>
          <Input id="email" {...form.register("accountStep.email")} />
          {form.formState.errors.accountStep?.email?.message && (
            <small className="text-destructive">
              {form.formState.errors.accountStep.email.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-md">
            Senha
          </Label>
          <Input
            id="password"
            type="password"
            {...form.register("accountStep.password")}
          />
          {form.formState.errors.accountStep?.password?.message && (
            <small className="text-destructive">
              {form.formState.errors.accountStep.password.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  );
}
