import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

export default defineSchema({
    entries: defineTable({
        input: v.string(),
        response: v.string(),
    }),
});


