"use strict";
exports.__esModule = true;
exports.deleteBookingCustomAttributeResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.deleteBookingCustomAttributeResponseSchema = (0, schema_1.object)({ errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))] });
//# sourceMappingURL=deleteBookingCustomAttributeResponse.js.map