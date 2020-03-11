# react-facebook-pixel

[Docs](https://www.npmjs.com/package/react-facebook-pixel)

You can implement page tracking with Google Pixel in a similar way you do a Google Analytics page track with `react-facebook-pixel`. Below is a sample `withTracker/tsx` HOC that listens for route changes and fires a tracking event for both Facebook Pixel and Google Analytics.

```
import React, { useEffect } from "react";
import ReactGA, { FieldsObject } from "react-ga";
import ReactPixel from "react-facebook-pixel";
import { RouteComponentProps } from "react-router-dom";

export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {}
) => {
  ReactPixel.init(your-pixel-id-here);

  ReactGA.initialize(your-ga-tracking-code-here);

  const trackPage = (page: string) => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
    ReactPixel.pageView();
  };

  return (props: P) => {
    useEffect(() => {
      trackPage(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };
};
```
