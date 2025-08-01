var createElementNS_tests = [
  /* Arrays with three elements:
   *   the namespace argument
   *   the qualifiedName argument
   *   the expected exception, or null if none
   */
  [null, null, null],
  [null, undefined, null],
  [null, "foo", null],
  [null, "1foo", "INVALID_CHARACTER_ERR"],
  [null, "f1oo", null],
  [null, "foo1", null],
  [null, "\u0BC6foo", null],
  [null, "\u037Efoo", null],
  [null, "}foo", "INVALID_CHARACTER_ERR"],
  [null, "f}oo", null],
  [null, "foo}", null],
  [null, "\uFFFFfoo", null],
  [null, "f\uFFFFoo", null],
  [null, "foo\uFFFF", null],
  [null, "<foo", "INVALID_CHARACTER_ERR"],
  [null, "foo>", "INVALID_CHARACTER_ERR"],
  [null, "<foo>", "INVALID_CHARACTER_ERR"],
  [null, "f<oo", null],
  [null, "^^", "INVALID_CHARACTER_ERR"],
  [null, "fo o", "INVALID_CHARACTER_ERR"],
  [null, "-foo", "INVALID_CHARACTER_ERR"],
  [null, ".foo", "INVALID_CHARACTER_ERR"],
  [null, ":foo", "INVALID_CHARACTER_ERR"],
  [null, "f:oo", "NAMESPACE_ERR"],
  [null, "foo:", "INVALID_CHARACTER_ERR"],
  [null, "f:o:o", "NAMESPACE_ERR"],
  [null, ":", "INVALID_CHARACTER_ERR"],
  [null, "xml", null],
  [null, "xmlns", "NAMESPACE_ERR"],
  [null, "xmlfoo", null],
  [null, "xml:foo", "NAMESPACE_ERR"],
  [null, "xmlns:foo", "NAMESPACE_ERR"],
  [null, "xmlfoo:bar", "NAMESPACE_ERR"],
  [null, "null:xml", "NAMESPACE_ERR"],
  ["", null, null],
  ["", ":foo", "INVALID_CHARACTER_ERR"],
  ["", "f:oo", "NAMESPACE_ERR"],
  ["", "foo:", "INVALID_CHARACTER_ERR"],
  [undefined, null, null],
  [undefined, undefined, null],
  [undefined, "foo", null],
  [undefined, "1foo", "INVALID_CHARACTER_ERR"],
  [undefined, "f1oo", null],
  [undefined, "foo1", null],
  [undefined, ":foo", "INVALID_CHARACTER_ERR"],
  [undefined, "f:oo", "NAMESPACE_ERR"],
  [undefined, "foo:", "INVALID_CHARACTER_ERR"],
  [undefined, "f::oo", "INVALID_CHARACTER_ERR"],
  [undefined, "xml", null],
  [undefined, "xmlns", "NAMESPACE_ERR"],
  [undefined, "xmlfoo", null],
  [undefined, "xml:foo", "NAMESPACE_ERR"],
  [undefined, "xmlns:foo", "NAMESPACE_ERR"],
  [undefined, "xmlfoo:bar", "NAMESPACE_ERR"],
  ["http://example.com/", "foo", null],
  ["http://example.com/", "1foo", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "<foo>", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "fo<o", null],
  ["http://example.com/", "-foo", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", ".foo", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "f1oo", null],
  ["http://example.com/", "foo1", null],
  ["http://example.com/", ":foo", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "f:oo", null],
  ["http://example.com/", "f:o:o", null],
  ["http://example.com/", "foo:", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "f::oo", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "a:0", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "0:a", null],
  ["http://example.com/", "a:_", null],
  ["http://example.com/", "a:\u0BC6", null],
  ["http://example.com/", "a:\u037E", null],
  ["http://example.com/", "a:\u0300", null],
  ["http://example.com/", "\u0BC6:a", null],
  ["http://example.com/", "\u0300:a", null],
  ["http://example.com/", "\u037E:a", null],
  ["http://example.com/", "a:a\u0BC6", null],
  ["http://example.com/", "a\u0BC6:a", null],
  ["http://example.com/", "xml:test", "NAMESPACE_ERR"],
  ["http://example.com/", "xmlns:test", "NAMESPACE_ERR"],
  ["http://example.com/", "test:xmlns", null],
  ["http://example.com/", "xmlns", "NAMESPACE_ERR"],
  ["http://example.com/", "_:_", null],
  ["http://example.com/", "_:h0", null],
  ["http://example.com/", "_:test", null],
  ["http://example.com/", "l_:_", null],
  ["http://example.com/", "ns:_0", null],
  ["http://example.com/", "ns:a0", null],
  ["http://example.com/", "ns0:test", null],
  ["http://example.com/", "a.b:c", null],
  ["http://example.com/", "a-b:c", null],
  ["http://example.com/", "xml", null],
  ["http://example.com/", "XMLNS", null],
  ["http://example.com/", "xmlfoo", null],
  ["http://example.com/", "xml:foo", "NAMESPACE_ERR"],
  ["http://example.com/", "XML:foo", null],
  ["http://example.com/", "xmlns:foo", "NAMESPACE_ERR"],
  ["http://example.com/", "XMLNS:foo", null],
  ["http://example.com/", "xmlfoo:bar", null],
  ["http://example.com/", "prefix::local", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:{", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:}", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:~", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:'", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:!", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:@", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:#", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:$", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:%", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:^", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:&", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:*", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:(", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:)", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:+", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:=", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:[", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:]", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:\\", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:/", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:;", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:`", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:<", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:>", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:,", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:a ", "INVALID_CHARACTER_ERR"],
  ["http://example.com/", "namespaceURI:\"", "INVALID_CHARACTER_ERR"],
  ["/", "foo", null],
  ["/", "1foo", "INVALID_CHARACTER_ERR"],
  ["/", "f1oo", null],
  ["/", "foo1", null],
  ["/", ":foo", "INVALID_CHARACTER_ERR"],
  ["/", "f:oo", null],
  ["/", "foo:", "INVALID_CHARACTER_ERR"],
  ["/", "xml", null],
  ["/", "xmlns", "NAMESPACE_ERR"],
  ["/", "xmlfoo", null],
  ["/", "xml:foo", "NAMESPACE_ERR"],
  ["/", "xmlns:foo", "NAMESPACE_ERR"],
  ["/", "xmlfoo:bar", null],
  ["http://www.w3.org/XML/1998/namespace", "foo", null],
  ["http://www.w3.org/XML/1998/namespace", "1foo", "INVALID_CHARACTER_ERR"],
  ["http://www.w3.org/XML/1998/namespace", "f1oo", null],
  ["http://www.w3.org/XML/1998/namespace", "foo1", null],
  ["http://www.w3.org/XML/1998/namespace", ":foo", "INVALID_CHARACTER_ERR"],
  ["http://www.w3.org/XML/1998/namespace", "f:oo", null],
  ["http://www.w3.org/XML/1998/namespace", "foo:", "INVALID_CHARACTER_ERR"],
  ["http://www.w3.org/XML/1998/namespace", "xml", null],
  ["http://www.w3.org/XML/1998/namespace", "xmlns", "NAMESPACE_ERR"],
  ["http://www.w3.org/XML/1998/namespace", "xmlfoo", null],
  ["http://www.w3.org/XML/1998/namespace", "xml:foo", null],
  ["http://www.w3.org/XML/1998/namespace", "xmlns:foo", "NAMESPACE_ERR"],
  ["http://www.w3.org/XML/1998/namespace", "xmlfoo:bar", null],
  ["http://www.w3.org/XML/1998/namespaces", "xml:foo", "NAMESPACE_ERR"],
  ["http://www.w3.org/xml/1998/namespace", "xml:foo", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", "foo", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", "1foo", "INVALID_CHARACTER_ERR"],
  ["http://www.w3.org/2000/xmlns/", "f1oo", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", "foo1", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", ":foo", "INVALID_CHARACTER_ERR"],
  ["http://www.w3.org/2000/xmlns/", "f:oo", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", "foo:", "INVALID_CHARACTER_ERR"],
  ["http://www.w3.org/2000/xmlns/", "xml", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", "xmlns", null],
  ["http://www.w3.org/2000/xmlns/", "xmlfoo", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", "xml:foo", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", "xmlns:foo", null],
  ["http://www.w3.org/2000/xmlns/", "xmlfoo:bar", "NAMESPACE_ERR"],
  ["http://www.w3.org/2000/xmlns/", "foo:xmlns", "NAMESPACE_ERR"],
  ["foo:", "foo", null],
  ["foo:", "1foo", "INVALID_CHARACTER_ERR"],
  ["foo:", "f1oo", null],
  ["foo:", "foo1", null],
  ["foo:", ":foo", "INVALID_CHARACTER_ERR"],
  ["foo:", "f:oo", null],
  ["foo:", "foo:", "INVALID_CHARACTER_ERR"],
  ["foo:", "xml", null],
  ["foo:", "xmlns", "NAMESPACE_ERR"],
  ["foo:", "xmlfoo", null],
  ["foo:", "xml:foo", "NAMESPACE_ERR"],
  ["foo:", "xmlns:foo", "NAMESPACE_ERR"],
  ["foo:", "xmlfoo:bar", null],
]
