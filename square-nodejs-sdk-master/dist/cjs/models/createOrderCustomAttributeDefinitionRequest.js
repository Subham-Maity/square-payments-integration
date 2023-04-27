"use strict";
exports.__esModule = true;
exports.createOrderCustomAttributeDefinitionRequestSchema = void 0;
var schema_1 = require("../schema");
var customAttributeDefinition_1 = require("./customAttributeDefinition");
exports.createOrderCustomAttributeDefinitionRequestSchema = (0, schema_1.object)({
    customAttributeDefinition: [
        'custom_attribute_definition',
        (0, schema_1.lazy)(function () { return customAttributeDefinition_1.customAttributeDefinitionSchema; }),
    ],
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=createOrderCustomAttributeDefinitionRequest.js.map