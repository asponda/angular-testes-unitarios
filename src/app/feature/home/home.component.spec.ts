import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { ApoliceService } from '../../shared/services/apolice/apolice.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let apolicesService: ApoliceService;

  const apolicesMock = [
    {
      'id_apolice': '1',
      'nome_seguro': 'Seguro 1',
    },
    {
      'id_apolice': '2',
      'nome_seguro': 'Seguro 2'
    },
    {
      'id_apolice': '3',
      'nome_seguro': 'Seguro 3'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'segunda-tela', redirectTo: '' }
        ]),
        SharedModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    router = fixture.debugElement.injector.get(Router);
    apolicesService = fixture.debugElement.injector.get(ApoliceService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('apolices', () => {

    it('deve atribuir informações de apolices quando apolices service é chamado', () => {

      const getApolicesSpyOn = spyOn(apolicesService, 'getApolices').and.returnValue(
        Observable.of(apolicesMock)
      );

      component.ngOnInit();

      expect(getApolicesSpyOn).toHaveBeenCalled();
      expect(component.apolices).toEqual(apolicesMock);
    });


    it('deve entrar no fluxo de erro quando o apolice service retornar erro', () => {

      const getApolicesSpyOn = spyOn(apolicesService, 'getApolices').and.returnValue(
        Observable.throw(new Error('test'))
      );

      const logSpyOn = spyOn(console, 'log').and.callThrough();

      component.ngOnInit();

      expect(getApolicesSpyOn).toHaveBeenCalled();

      expect(logSpyOn).toHaveBeenCalled();
      expect(logSpyOn.calls.mostRecent().args).toEqual([
        new Error('test')
      ]);
    });

  });

  it('deve incrementar o contador quando o metodo incrementarContador for chamado', () => {

    expect((<any>component).contadorClick).toEqual(0);

    (<any>component).incrementarContador();

    expect((<any>component).contadorClick).toEqual(1);
  });

  it('deve alterar o texto de exibição quando o metodo onClickButtonExibicaoTexto é acionado', () => {
    (<any>component).contadorClick = 0;

    component.onClickButtonExibicaoTexto();

    expect(component.exemploExibicaoTexto).toEqual('teste 1');
  });

  describe('botão proximo', () => {

    it('deve redirecionar para a rota "segunda-tela" quando o metodo onClickButton for chamado', () => {

      const navigateSpy = spyOn(router, 'navigate');

      component.onClickButton();

      expect(navigateSpy).toHaveBeenCalled();
      expect(navigateSpy.calls.mostRecent().args).toEqual([
        ['segunda-tela']
      ]);

    });
  });
});
