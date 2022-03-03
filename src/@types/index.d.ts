import { Marker } from 'leaflet';

declare type Func<P = undefined, R = any> = (props: P) => R;

declare class MarkerCluster extends Marker {
  /*
   * Recursively retrieve all child markers of this cluster.
   */
  public getAllChildMarkers(): Marker[];

  /*
   * Returns the count of how many child markers we have.
   */
  public getChildCount(): number;

  /*
   * Zoom to the minimum of showing all of the child markers, or the extents of this cluster.
   */
  public zoomToBounds(options?: FitBoundsOptions): void;

  /*
   * Returns the cluster bounds.
   */
  public getBounds(): LatLngBounds;
}

declare module 'react-modal-video';