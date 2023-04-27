"use strict";
exports.__esModule = true;
exports.bookingCustomAttributeDeleteResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.bookingCustomAttributeDeleteResponseSchema = (0, schema_1.object)({
    bookingId: ['booking_id', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bookingCustomAttributeDeleteResponse.js.map