import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Stepper } from "./components/Stepper";
import { AccountStep } from "./components/steps/AccountStep";
import { accountStepSchema } from "./components/steps/AccountStep/schema";
import { AddressStep } from "./components/steps/AddressStep";
import { addressStepSchema } from "./components/steps/AddressStep/schema";
import { PersonalStep } from "./components/steps/PersonalStep/PersonalStep";
import { personalStepSchema } from "./components/steps/PersonalStep/schema";

const schema = z.object({
  accountStep: accountStepSchema,
  personalStep: personalStepSchema,
  addressStep: addressStepSchema,
});

export type FormData = z.infer<typeof schema>;

export function App() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      accountStep: { email: "", password: "" },
      personalStep: { firstName: "", lastName: "", document: "" },
      addressStep: { state: "", city: "", street: "" },
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
    // API call
  });

  return (
    <div className="min-h-screen flex justify-center pt-40">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <Stepper
            steps={[
              {
                label: "Conta",
                content: <AccountStep />,
              },
              {
                label: "Dados pessoais",
                content: <PersonalStep />,
              },
              {
                label: "Endereço",
                content: <AddressStep />,
              },
            ]}
          />
        </form>
      </FormProvider>
    </div>
  );
}
