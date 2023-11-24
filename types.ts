import { Server, Member, Proflie } from "@prisma/client"

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Proflie })[];
};
