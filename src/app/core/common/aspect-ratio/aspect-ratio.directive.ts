import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { BaseFxDirective, MediaChange, MediaMonitor, StyleUtils } from '@angular/flex-layout';
import { AspectRatioContentDirective } from './aspect-ratio-content.directive';

@Directive({
  selector: `
  [amAspectRatio],
  [amAspectRatio.xs], [amAspectRatio.sm], [amAspectRatio.md], [amAspectRatio.lg], [amAspectRatio.xl],
  [amAspectRatio.lt-sm], [amAspectRatio.lt-md], [amAspectRatio.lt-lg], [amAspectRatio.lt-xl],
  [amAspectRatio.gt-xs], [amAspectRatio.gt-sm], [amAspectRatio.gt-md], [amAspectRatio.gt-lg],
  `
})
export class AspectRatioDirective extends BaseFxDirective implements OnInit, AfterContentInit, OnChanges, OnDestroy {

  @ContentChild(AspectRatioContentDirective, { read: ElementRef }) contentElement: ElementRef;
  pseudoElement: any;

  constructor(monitor: MediaMonitor,
              private styleUtils: StyleUtils,
              private renderer: Renderer2,
              private hostElement: ElementRef,
              private cd: ChangeDetectorRef) {
    super(monitor, hostElement, styleUtils);

    this.pseudoElement = this.renderer.createElement('div');
    this.renderer.addClass(this.pseudoElement, 'am-aspect-ratio-pseudo-element');

    this._cacheInput('aspectRatio', '');
  }

  /* tslint:disable */
  @Input('amAspectRatio') set aspectRatio(val) {
    this._cacheInput('aspectRatio', val);
  };

  @Input('amAspectRatio.xs') set aspectRatioXs(val) {
    this._cacheInput('aspectRatioXs', val);
  };

  @Input('amAspectRatio.sm') set aspectRatioSm(val) {
    this._cacheInput('aspectRatioSm', val);
  };

  @Input('amAspectRatio.md') set aspectRatioMd(val) {
    this._cacheInput('aspectRatioMd', val);
  };

  @Input('amAspectRatio.lg') set aspectRatioLg(val) {
    this._cacheInput('aspectRatioLg', val);
  };

  @Input('amAspectRatio.xl') set aspectRatioXl(val) {
    this._cacheInput('aspectRatioXl', val);
  };

  @Input('amAspectRatio.gt-xs') set aspectRatioGtXs(val) {
    this._cacheInput('aspectRatioGtXs', val);
  };

  @Input('amAspectRatio.gt-sm') set aspectRatioGtSm(val) {
    this._cacheInput('aspectRatioGtSm', val);
  };

  @Input('amAspectRatio.gt-md') set aspectRatioGtMd(val) {
    this._cacheInput('aspectRatioGtMd', val);
  };

  @Input('amAspectRatio.gt-lg') set aspectRatioGtLg(val) {
    this._cacheInput('aspectRatioGtLg', val);
  };

  @Input('amAspectRatio.lt-sm') set aspectRatioLtSm(val) {
    this._cacheInput('aspectRatioLtSm', val);
  };

  /* tslint:enable */

  @Input('amAspectRatio.lt-md') set aspectRatioLtMd(val) {
    this._cacheInput('aspectRatioLtMd', val);
  };

  @Input('amAspectRatio.lt-lg') set aspectRatioLtLg(val) {
    this._cacheInput('aspectRatioLtLg', val);
  };

  @Input('amAspectRatio.lt-xl') set aspectRatioLtXl(val) {
    this._cacheInput('aspectRatioLtXl', val);
  };

  /**
   * For @Input changes on the current mq activation property, see onMediaQueryChanges()
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['aspectRatio'] != null || this._mqActivation) {
      this._updateStyle();
    }
  }

  ngOnInit() {
    super.ngOnInit();

    this._listenForMediaQueryChanges('aspectRatio', '', (changes: MediaChange) => {
      this._updateStyle(changes.value);
    });
    this._updateStyle();
  }

  ngAfterContentInit() {
    if (this.hostElement && this.pseudoElement && this.contentElement) {
      this.renderer.addClass(this.hostElement.nativeElement, 'am-aspect-ratio-host-element');

      this.renderer.insertBefore(this.hostElement.nativeElement, this.pseudoElement, this.contentElement.nativeElement);

    } else {
      if (!this.hostElement) {
        console.error('AllMarketingAspectRatio: Host Element is not defined.');
      }
      if (!this.pseudoElement) {
        console.error('AllMarketingAspectRatio: Pseudo Element is not defined.');
      }
      if (!this.contentElement) {
        console.error('AllMarketingAspectRatio: AspectRatioContent Element is not defined.');
      }
    }
  }

  calculatePadding(ratio: string) {
    const ratios = ratio.split(':');
    return (+ratios[1] / +ratios[0]) * 100;
  }

  renderPadding(paddingInPercent: number, compensation?: string) {
    if (compensation) {
      this.renderer.setStyle(this.pseudoElement, 'padding-top', `calc(${paddingInPercent}% ${compensation})`);
    } else {
      this.renderer.setStyle(this.pseudoElement, 'padding-top', `${paddingInPercent}%`);
    }
    this.cd.markForCheck();
  }

  protected _updateStyle(value?: string | number) {
    let compensation: string;
    let aspectRatio = value || this._queryInput('aspectRatio') || '';
    if (this._mqActivation) {
      aspectRatio = this._mqActivation.activatedInput;
    }

    if (aspectRatio) {
      if (aspectRatio.split('-').length > 1) {
        const ratioAndCompensation = aspectRatio.split('-');
        aspectRatio = ratioAndCompensation[0];
        compensation = `- ${ratioAndCompensation[1]}`;
      } else if (aspectRatio.split('+').length > 1) {
        const ratioAndCompensation = aspectRatio.split('+');
        aspectRatio = ratioAndCompensation[0];
        compensation = `+ ${ratioAndCompensation[1]}`;
      }
    }

    if (compensation) {
      this.renderPadding(this.calculatePadding(aspectRatio), compensation);
    } else {
      this.renderPadding(this.calculatePadding(aspectRatio));
    }
  }
}
