import { ComponentFactoryResolver, Injectable, ViewContainerRef, ComponentRef } from '@angular/core';

@Injectable()
export class RulesService {
  maxWishes = 10;
  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  createComponent(viewContainerRef: ViewContainerRef, componentType: any): ComponentRef<any> {
    if (this.maxWishes > 0) {
      if (viewContainerRef) {
        viewContainerRef.clear();
      }
      this.maxWishes--;
      const factory = this.resolver.resolveComponentFactory(componentType);
      return viewContainerRef.createComponent(factory);
    }
    return null;
  }

  destroyComponent(componentRef: any) {
    this.maxWishes++;
    componentRef.destroy();
  }
}
