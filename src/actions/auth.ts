'use server';
import { createUser } from "@/services/users";
import { SignUpInput } from "@/types/auth";
import { createPractitioner } from "@/services/practitioner";

export async function signUpAction(input: SignUpInput) {
    const user = await createUser(input);
    
    if (!user) {
        return false;
    }

    await createPractitioner({
        practitioner_id: user.id,
        first_name: input.first_name,
        last_name: input.last_name,
        age: input.age,
        weight_category: input.weight_category,
        start_date: input.start_date,
        gym: input.gym,
    });

    return true;
}