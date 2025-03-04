import { createAction } from "@reduxjs/toolkit";

// 8. Створюємо action statusSelect
export const citySelect = createAction("task/citySelect")
export const transmissionSelect = createAction("task/transmission");
export const engineSelect = createAction("task/engine");