export interface Image {
    /** original URL from ImmoScout24 (not the one copied to own bucket) */
    url: string;
    urlBucket: string;
    /** name / description / notes */
    text: string;
}
