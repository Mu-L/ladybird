/*
 * Copyright (c) 2021-2022, Linus Groh <linusg@serenityos.org>
 * Copyright (c) 2024, Tim Flynn <trflynn89@ladybird.org>
 *
 * SPDX-License-Identifier: BSD-2-Clause
 */

#pragma once

#include <LibJS/Runtime/NativeFunction.h>

namespace JS::Temporal {

class JS_API PlainDateTimeConstructor final : public NativeFunction {
    JS_OBJECT(PlainDateTimeConstructor, NativeFunction);
    GC_DECLARE_ALLOCATOR(PlainDateTimeConstructor);

public:
    virtual void initialize(Realm&) override;
    virtual ~PlainDateTimeConstructor() override = default;

    virtual ThrowCompletionOr<Value> call() override;
    virtual ThrowCompletionOr<GC::Ref<Object>> construct(FunctionObject& new_target) override;

private:
    explicit PlainDateTimeConstructor(Realm&);

    virtual bool has_constructor() const override { return true; }

    JS_DECLARE_NATIVE_FUNCTION(from);
    JS_DECLARE_NATIVE_FUNCTION(compare);
};

}
