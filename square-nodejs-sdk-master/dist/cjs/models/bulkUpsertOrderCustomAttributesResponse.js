"use strict";
exports.__esModule = true;
exports.bulkUpsertOrderCustomAttributesResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var upsertOrderCustomAttributeResponse_1 = require("./upsertOrderCustomAttributeResponse");
exports.bulkUpsertOrderCustomAttributesResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    values: [
        'values',
        (0, schema_1.dict)((0, schema_1.lazy)(function () { return upsertOrderCustomAttributeResponse_1.upsertOrderCustomAttributeResponseSchema; })),
    ]
});
//# sourceMappingURL=bulkUpsertOrderCustomAttributesResponse.js.map