# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "guard-minitest"
  s.version = "2.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Yann Lugrin", "R\u{e9}my Coutable"]
  s.date = "2013-10-05"
  s.description = "Guard::Minitest automatically run your tests with Minitest framework (much like autotest)"
  s.email = ["remy@rymai.me"]
  s.homepage = "https://rubygems.org/gems/guard-minitest"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.2")
  s.rubygems_version = "2.0.3"
  s.summary = "Guard plugin for the Minitest framework"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<guard>, ["~> 2.0"])
      s.add_runtime_dependency(%q<minitest>, [">= 3.0"])
      s.add_development_dependency(%q<bundler>, [">= 0"])
    else
      s.add_dependency(%q<guard>, ["~> 2.0"])
      s.add_dependency(%q<minitest>, [">= 3.0"])
      s.add_dependency(%q<bundler>, [">= 0"])
    end
  else
    s.add_dependency(%q<guard>, ["~> 2.0"])
    s.add_dependency(%q<minitest>, [">= 3.0"])
    s.add_dependency(%q<bundler>, [">= 0"])
  end
end
