import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthGuard } from '@app/core/guard/auth.guard';
import { AuthService } from '@app/core/services/authentication/auth.service';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [
    AuthGuard,
    AuthService
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class CoreModule {
  constructor(@Optional()
              @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${
        moduleName
        } has already been loaded. Import Core modules in the AppModule only.`,
    );
  }
}
