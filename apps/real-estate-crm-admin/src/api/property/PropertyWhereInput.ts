import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PropertyWhereInput = {
  agentAssignments?: AgentAssignmentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  size?: IntNullableFilter;
};
