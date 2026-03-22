import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import SessionCreateForm from "@/components/sessions/SessionCreateForm";
import { getProgramLevelsAction } from "@/actions/programLevel";
import { getPractitionerEvaluatorsAction } from "@/actions/practitioner";

export default async function CreateSessionPage() {
  const programLevels = await getProgramLevelsAction();
  const evaluators = await getPractitionerEvaluatorsAction();

  return (
    <div>
      <PageBreadcrumb pageTitle="Crear Sesión" />
      <SessionCreateForm
        programLevels={programLevels ?? []}
        evaluators={evaluators ?? []}
      />
    </div>
  );
}