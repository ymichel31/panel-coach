import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import SessionForm from "@/components/sessions/SessionForm";
import { getSkillsAction } from "@/actions/skill";
import { getProgramLevelsAction } from "@/actions/programLevel";

export default async function CreateSessionPage() {
  const skills = await getSkillsAction();
  const programLevels = await getProgramLevelsAction();

  return (
    <div>
      <PageBreadcrumb pageTitle="Crear Sesión" />
      <SessionForm
        skills={skills ?? []}
        programLevels={programLevels ?? []}
      />
    </div>
  );
}